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

