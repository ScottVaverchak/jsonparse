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
