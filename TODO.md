# TODO

## Priority - Code Creation

* Add an ability to compare json -> type_data -> json1 -> type_data1
    * We would compare the type_data and type_data1
    * This should ignore the value of the object, we don't care about that

* Create proper generators for the following types: 
    * DateTime
    * String
    * Int
    * Float
    * Object (recursive)
    * Array (recursive)

* Create type specific generators
    * String
        * First Name
        * Last Name
        * Full Name
        * Address
        * City 
        * State
        * Long / Lat

* Create name generator for values inside an array

## Priotity - Code Refactoring

* Move type checker so it uses an array of functions that return null or a function to convert the opject
* The way we handle arrays is not great. It's a lot of corner cases for it and I don't see why we need that
* Refactor the testing framework
    * Count the total tests 
    * Count the amount of time it takes to run
    * Sometimes the test fails? Maybe this is a timing issue? Not sure...


## Ideas - Need more refinement before moving into Code Creation

* Types should have a default generation methods 
    * For numerical types, this would be range and increment generators 
        * Ex: { type: 'Integer', generator: range, options: { min: 0, max: 20, step: 1}}
        * Range could be used for multiple types - it would ingest the type field to know how to generate.
    * For string types, this would be random lorem ipsum
        * Ex: {type: 'String', generator: loremipsum, options { min: 6, max: 200}}
            * The min and max would be the upper and lower bounds of the length of the string
    * Users will be able to switch the generation method and options in the UI or via our CLI
        * May want to consider a json notation - data.json.config
            * This file would allows users to tell us the generation type and ranges (not sure about this)
