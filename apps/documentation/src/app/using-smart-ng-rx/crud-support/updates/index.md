# Updates

Any row that has been exposed to your main application via a smart selector will automatically be available for update. All you have to do is assign a row. All the necessary dispatches to the reducer and effects will be handled for you.

You will need to implement the update method in your effects service for the row the entity lives in.

As an example, here is how we've updated the `update` method in the `DepartmentEffectsService` in the demo:

> **Note:** explanation of this code will follow

```typescript
  override update: (
    oldRow: Department,
    newRow: Department,
  ) => Observable<Department[]> = (oldRow: Department, newRow: Department) => {
    return this.http
      .put<Department[]>('./api/departments', {
        id: newRow.id,
        name: newRow.name,
      })
      .pipe(
        map((departments) => addIsDirty(departments) as Department[]),
        map(childrenTransform),
        catchError((_: unknown) => {
          // probably would want to send a message to the user here
          return of([oldRow]);
        }),
      );
  };
```

The first thing you will note is that the method takes two parameters, `oldRow` and `newRow`. The `oldRow` is the row that was in the store before the update was requested. The `newRow` is the row that was passed in to the `update` method. This allows you to roll back the update if the update fails as we do in the `catchError` block.

This needs a bit of explanation. The effect that calls this service keeps track of the row that was updated. Instead of using switchMap() around our call to this service, we use concatMap(). By doing this, if a call fails, we can rollback each call so that when the next call comes in, the row is in the state is was prior to the update that just failed.

So, just like we've done here, you want to catch errors and return the old row. Whatever is in the return value row is what we'll use to pass in to the next update for the same row.

Also, notice that we always return an array of rows even though there should only ever be one row in the array. This allows us to reuse code that we used previously to get the list of rows from the server. You'll see that in our implementation on the server, we reuse the getByIds code to get the row we just updated.

All of this has implications for how you update by assigning a value to a field in a row.

Let's say you have an edit field that you want to have update the row. You might be tempted to bind it directly to the field in the row. This would work, but even with debounce, you'd end up updating the row more frequently than you'd want to. Instead, you should consider binding the edit field to a local variable and then, when you are ready to update the row, assign the value of the local variable to the row. We've designed the code so that either way will work. But the latter will be more performant.

We've also ensured that updating multiple fields will update the row only once as long as those multiple assignments happen within the same event loop. This is because we use a `debounceTime(1)` to ensure that the update only happens once.