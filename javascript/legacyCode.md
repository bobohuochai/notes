
> Code without tests is bad code. It doesn't matter how well written it is;it doesn't matter how pretty or object-oriented or well-encapsulated it is. With tests,we can change the behavior of our code quickly and verifiably. Without them,we really don't know if our code is getting better or worse.



> To mitigate risk, we have to ask three questions:
> 1. What changes do we have to make ?
> 2. How will we know that we've done them correctly?
> 3. How will we know that we haven't broken anything ?


> Unit testing is one of the most important components in legacy code work.



>Unit tests fill in gaps that larger tests can't. We can test pieces of code independently;we can group tests so that we can run some under some conditions and others under other conditions.
>1. They run fast.
>2. They help us localize problems.

> Unit tests run fast. If they don't run fast,they aren't unit tests.
> Other kinds of tests ofen masquerade as unit tests. A test is not a unit test if:
>   1. It talks to a database.
>   2. It communicates across a network.
>   3. It touches the file system.
>   4. You hava to do special things to your environment(such as editing configuration files) to run it.


>When you break dependencies in legacy code,you often hava to suspend your sense of aesthetics a bit. Some dependencies break cleanly; others end up looking less than ideal from a design point of view.They are like the incision points in surgery: There migth be a scar left in your code after your work, but everything beneath it can get better.

>If later you can cover code around the point where you broke the dependencies,you can heal that scar,too.


### The legacy code change algorithm
1. Identify change points.
2. Find test points.
3. Break dependencies.
4. Write tests.
5. Make changes and refactor.

