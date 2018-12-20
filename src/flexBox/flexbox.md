# What is Flexbox?
The flexbox model provides for an efficient way to layout, align, and distribute space among elements within your document -- even when the viewport and the size of your elements is dynamic or unknown.

###### variables here:
* layout
* align
* distribute space among elements

## How to use Flexbox?
Start by defining the container of your element as a flex. and you do this as:
```display: flex ``` or ``` display: inline-flex``` for the inline variation.

## What is happening?
1. Setting the element for which has ```display: flex ``` is called **flex container** 
2. Its children are now called  **flex-item**

The above two form the foundation to using flexbox.

## Flex-container Properties
There are 6 flex-containers properties and these are:
1. **Flex-direction**
2. **Flex-wrap**
3. **Flex-flow**
4. **Justify-content**
5. **Align-items**
6. **Align-content**

###### Flex-direction
This property controls the direction in which the flex-items are laid along the main axis.Either horizontally, vertically or reversed in both directions.

These are described as **main-axis** and **cross axis**. The defaults are shown below

[See image](assets/flexDirection.jpeg)

This flex container property can only take the following values:
```flex-direction: row || column || row-reverse || column-reverse;```

###### Flex-wrap
The flex-wrap property can take on any of three values:
``` flex-wrap: wrap || nowrap || wrap-reverse ```

The ``` wrap ``` value makes sure that when there is no enough space, the element should be wrapped to the next line.

The ```nowrap``` value sets all flex-items in the main axis and do not wrap onto the next line.

The ```wrap-reverse``` just reverses the result of ```wrap```.
 

###### Flex-flow
The flex-flow is a shorthand property which takes flex-direction and flex-wrap values.

Used as follow: ``` flex-flow: (flex-direction) (flex-wrap)```

###### Justify-content
The justify content property defines how flex items are laid out on the main axis.

The Justify-content has the following values:
* flex-start
* flex-end
* center
* space-between
* space-around

###### Align-items
The align-items property somewhat similar to the justify-content property.

```align-items``` can be set to any of these values:
* flex-start
* flex-end
* center
* stretch
* baseline

It defines how flex-items are laid out on the **cross axis**. This is the difference between the align-items property and justify-content.

###### Align-content

Above in the flex-wrap property section, we see that when we added more items, they wrapped around a multi-line flex container. 

This property is used on multi-line flex-containers. It takes the same values as ```align-items``` apart from baseline.

By definition, it controls how the flex-items are aligned in a multi-line flex.

**OBS:** The variable to keep track of here is the fact that it works on a multi-line flex container meaning that if we have the flex-wrap proeprties set on the container in question than we should definitely use align-content. 

## Flex-items Properties

The flex items have the following properties:

* Order
* Flex-grow
* Flex-shrink
* Flex-basis

###### Order
The order property allows for reordering the flex items within a container.

Basically, with the order property you can move flex-item from one position to another.

This is done without affecting the source code. Which means the position of the flex items in the HTML source code isn't changed.



