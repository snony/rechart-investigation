## Epics

Redux-observable truly shines the most for complex async/side effects. 

An **Epic** is the core primitive of redux-observable.

It is a function which takes a **stream of actions** and **returns** a **stream of actions**. 
----- Actions ----
|
----- Actions ----
It is roughly this type signature:
```function (action$: Observable<Action>, state$:StateObservable<State>: Observable<Action>): Observable<Action>```

While you'll most commonly produce actions out in response to some action you received in, that's not actually a requirement! Once you're inside your Epic, use any Observable patterns you desire as long as anything output from the final, returned stream, is an action. 

The actions you emit will be immediately dispatched through the normal store.dispatch(), so under the hood redux-observable effectively does ```epic(action$, state$).subscribe(store.dispatch)```

Epics run alongside the normal Redux dispatch channel, **after** the reducers have already received them -- so you cannot "swallow" an incoming action. Actions always run through your reducers before your epics even receive them.

If you let an incoming action pass through, it will create an infinite loop.

