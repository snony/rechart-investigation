## Type assertions
Sometimes you'll end up in a situation where you'll know more about a value than TypeScript does. Usually this will happen when you know the type of some entity could be more specific than its current type.

*Type assertions* are a way to tell the compiler "trust me, I know what I'm doing". A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. It has no runtime impact, and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need. 

Type assertions have two forms. One is the "angle-bracket" syntax:
```let someValue: any = "this is a string"```
```let strLength: number = (<string>someValue).length```

And the other is the ```as```-syntax:
```let someValue: any = "this is a string"```
```let strLength: number = (someValue as string).length```

## Advanced Types
###### Intersection Types
An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need. For example ``` Person & Serializable & Loggable``` is a ```Person``` and ```Serializable``` and ```Loggable```. That means an object of this type will have all members of all three types.

**Mixing** is the ability of an object that has functionality of several other objects.

[See link, for examples](https://www.typescriptlang.org/docs/handbook/advanced-types.html)

## Union Types
