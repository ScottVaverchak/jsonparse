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

* Create name generator for values inside an array

## Priotity - Code Refactoring

* Move type checker so it uses an array of functions that return null or a function to convert the opject