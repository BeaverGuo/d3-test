/*design pattern notes:
1.introduction:
OO:类的粒度,接口与继承关系,未来拓展,避免重新设计
要敢于使用面向对象
不要一开始就想新的方法去解决,学会复用
One thing expert designers know not to do is solve every problem from first 
principles. Rather, they reuse solutions that have worked for them in the past. 
basing new designs on prior experience.
object-oriented designers follow patterns like "represent states 
with objects" and "decorate objects so you can easily add/remove features." Once 
you know the pattern, a lot of design decisions follow automatically. 
If you could remember the details of the previous problem and how 
you solved it, then you could reuse the experience instead of rediscovering it.
how to represent algorithms as objects.
The design patterns in this book are descriptions of communicating objects and classes that are customized to solve 
a general design problem in a particular context. 
MVC consists of three kinds of objects. The Model is the application object, the 
View is its screen presentation, and the Controller defines the way the user 
interface reacts to user input. Before MVC, user interface designs tended to lump 
these objects together. MVC decouples them to increase flexibility and reuse. 
Model是不是可以看成数据object,而controller看成改变M(数据)的控制器,View则是Model的示图
MVC decouples views and models by establishing a subscribe/notify protocol between 
them. A view must ensure that its appearance reflects the state of the model. 
Whenever the model's data changes, the model notifies views that depend on it. 
In response, each view gets an opportunity to update itself. This approach lets 
you attach multiple views to a model to provide different presentations. You can 
also create new views for a model without rewriting it. 
这样看Model有点像redux
Observer pattern:
多个views共一个model,解耦之后改变一个-->Model至其他views发生相应变化
MVC supports nested views with the CompositeView class, 
a subclass of View. CompositeView objects act just like View objects; a composite 
view can be used wherever a view can be used, but it also contains and manages 
nested views.

Composite (183) design pattern. It lets you create a class hierarchy in which 
some subclasses define primitive objects (e.g., Button) and other classes define 
composite objects (CompositeView) that assemble the primitives into more complex 
objects. 
组合优于继承
MVC also lets you change the way a view responds to user input without changing 
its visual presentation. You might want to change the way it responds to the keyboard, 
for example, or have it use a pop-up menu instead of command keys. MVC encapsulates 
the response mechanism in a Controller object. There is a class hierarchy of 
controll

 For example, 
a view can be disabled so that it doesn't accept input simply by giving it a 
controller that ignores input events.

MVC uses other design patterns, such as Factory Method (121) to specify the default 
controller class for a view and Decorator (196) to add scrolling to a view. But 
the main relationships in MVC are given by the Observer, Composite, and Strategy 
design patterns. 

first criterion of design pattern:
purpose:creational,structural or behavioral purpose
创建，组合，行为
 Creational patterns concern the process of 
object creation. Structural patterns deal with the composition of classes or 
objects. Behavioral patterns characterize the ways in which classes or objects 
interact and distribute responsibility. 

second criterion of design pattern:
scope: specify whether the pattern applies to classes or objects.
Class patterns deal with relationships between 
classes and their subclasses. These relationships are established through 
inheritance, so they are static—fixed at compile-time. Object patterns deal with 
object relationships, which can be changed at run-time and are more dynamic. Almost 
all patterns use inheritance to some extent. So the only patterns labeled "class 
patterns" are those that focus on class relationships. Note that most patterns 
are in the Object scope. 
类是静态，对象是动态

 Composite is often used with Iterator or Visitor.
 像是mixin?
 设计模式如何解决问题?
Requests are the only way to get an object to execute an operation. Operations 
are the only way to change an object's internal data. Because of these restrictions, 
the object's internal state is said to be encapsulated; it cannot be accessed 
directly, and its representation is invisible from outside the object. 
所以这样才有getter and setter吗?
The hard part about object-oriented design is decomposing a system into objects. 
The task is difficult because many factors come into play: encapsulation, 
granularity, dependency, flexibility, performance, evolution, reusability, and 
on and on. They all influence the decomposition, often in conflicting ways. 

Object-oriented design methodologies favor many different approaches. You can 
write a problem statement, single out the nouns and verbs, and create corresponding 
classes and operations. Or you can focus on the collaborations and responsibilities 
in your system. Or you can model the real world and translate the objects found 
during analysis into design. There will always be disagreement on which approach 
is best.

