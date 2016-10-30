/*continue
Design patterns use techniques such as abstract coupling and layering to
promote loosely coupled systems.

8. Inability to alter classes conveniently. Sometimes you have to modify a
class that can't be modified conveniently. Perhaps you need the source code
and don't have it (as may be the case with a commercial class library).
Or maybe any change would require modifying lots of existing subclasses.
Design patterns offer ways to modify classes in such circumstances.
Design patterns: Adapter (157), Decorator (196), Visitor (366).

These examples reflect the flexibility that design patterns can help you build
into your software. How crucial such flexibility is depends on the kind of software
you're building. Let's look at the role design patterns play in the development
of three broad classes of software: application programs, toolkits, and
frameworks.
Application Programs
Design patterns that reduce dependencies can increase internal reuse. Looser coupling
boosts the likelihood that one class of object can cooperate with several others.
For example, when you eliminate dependencies on specific operations by isolating
and encapsulating each operation, you make it easier to reuse an operation in
different contexts. The same thing can happen when you remove algorithmic and
representational dependencies too.

Design patterns also make an application more maintainable when they're used to
limit platform dependencies and to layer a system.

Frameworks

A framework is a set of cooperating classes that make up a reusable design for
a specific class of software [Deu89, JF88]. For example, a framework can be geared
toward building graphical editors for different domains like artistic drawing,
music composition, and mechanical CAD [VL90, Joh92]. Another framework can help
you build compilers for different programming languages and target machines
[JML92]. Yet another might help you build financial modeling applications [BE93].
You customize a framework to a particular application by creating
application-specific subclasses of abstract classes from the framework.


The framework dictates the architecture of your application. It will define the
overall structure, its partitioning into classes and objects, the key
responsibilities thereof, how the classes and objects collaborate, and the thread
of control. A framework predefines these design parameters so that you, the
application designer/implementer, can concentrate on the specifics of your
application. The framework captures the design decisions that are common to its
application domain. Frameworks thus emphasize design reuse over code reuse, though
a framework will usually include concrete subclasses you can put to work
immediately.

Reuse on this level leads to an inversion of control between the application and
the software on which it's based. When you use a toolkit (or a conventional
subroutine library for that matter), you write the main body of the application
and call the code you want to reuse. When you use a framework, you reuse the main
body and write the code it calls. You'll have to write operations with particular
names and calling conventions, but that reduces the design decisions you have
to make.
框架类似帮你搭好架子,写api函数的调用代码,不自由,但是更利于维护
Not only can you build applications faster as a result, but the applications have
similar structures. They are easier to maintain, and they seem more consistent
to their users. On the other hand, you lose some creative freedom, since many
design decisions have been made for you.

If applications are hard to design, and toolkits are harder, then frameworks are
hardest of all.
A framework designer gambles that one architecture will work for
all applications in the domain. Any substantive change to the framework's design
would reduce its benefits considerably, since the framework's main contribution
to an application is the architecture it defines. Therefore it's imperative to
design the framework to be as flexible and extensible as possible.

Furthermore, because applications are so dependent on the framework for their
design, they are particularly sensitive to changes in framework interfaces. As
a framework evolves, applications have to evolve with it. That makes loose coupling
all the more important; otherwise even a minor change to the framework will have
major repercussions.

Design pattern and frameworks:
1. Design patterns are more abstract than frameworks. Frameworks can be
embodied in code, but only examples of patterns can be embodied in code.
A strength of frameworks is that they can be written down in programming
languages and not only studied but executed and reused directly. In contrast,
the design patterns in this book have to be implemented each time they're
used. Design patterns also explain the intent, trade-offs, and consequences
of a design.
2. Design patterns are smaller architectural elements than frameworks. A
typical framework contains several design patterns, but the reverse is never
true.
3. Design patterns are less specialized than frameworks. Frameworks always
have a particular application domain. A graphical editor framework might
be used in a factory simulation, but it won't be mistaken for a simulation
framework. In contrast, the design patterns in this catalog can be used
in nearly any kind of application. While more specialized design patterns
than ours are certainly possible (say, design patterns for distributed
systems or concurrent programming), even these wouldn't dictate an
application architecture like a framework would.

Larger object-oriented
applications will end up consisting of layers of frameworks that cooperate with
each other. Most of the design and code in the application will come from or be
influenced by the frameworks it uses.

How to Select a Design Pattern?
How to Use a Design Pattern?
1. Read the pattern once through for an overview. Pay particular attention
to the Applicability and Consequences sections to ensure the pattern is
right for your problem.

2. Go back and study the Structure, Participants, and Collaborations sections.
Make sure you understand the classes and objects in the pattern and how
they relate to one another.

3. Look at the Sample Code section to see a concrete example of the pattern
in code. Studying the code helps you learn how to implement the pattern.

4. Choose names for pattern participants that are meaningful in the application
context. The names for participants in design patterns are usually too
abstract to appear directly in an application. Nevertheless, it's useful
to incorporate the participant name into the name that appears in the
application. That helps make the pattern more explicit in the implementation.
For example, if you use the Strategy pattern for a text compositing algorithm,
then you might have classes SimpleLayoutStrategy or TeXLayoutStrategy.

5. Define the classes. Declare their interfaces, establish their inheritance
relationships, and define the instance variables that represent data and
object references. Identify existing classes in your application that the
pattern will affect, and modify them accordingly.

6. Define application-specific names for operations in the pattern. Here again,
the names generally depend on the application. Use the responsibilities
and collaborations associated with each operation as a guide. Also, be
consistent in your naming conventions. For example, you might use the
"Create-" prefix consistently to denote a factory method.

7. Implement the operations to carry out the responsibilities and
collaborations in the pattern. The Implementation section offers hints to
guide you in the implementation. The examples in the Sample Code section
can help as well.
啥时候不用
No discussion of how to use design patterns would be complete without a few words
on how not to use them. Design patterns should not be applied indiscriminately.
Often they achieve flexibility and variability by introducing additional levels
of indirection, and that can complicate a design and/or cost you some performance.


Recursive Composition
A common way to represent hierarchically structured information isthrough a
technique called recursive composition, whichentails building increasingly
complex elements out of simpler ones.Recursive composition gives us a way to
compose a document out ofsimple graphical elements. As a first step, we can tile
a set ofcharacters and graphics from left to right to form a line in thedocument.
Then multiple lines can be arranged to form a column,multiple columns can form
a page, and so on.


By using an object for each character and graphical element in the document, we
promote flexibility at the finest levels of Lexi'sdesign. We can treat text and
graphics uniformly with respect to howthey are drawn, formatted, and embedded
within each other. We canextend Lexi to support new character sets without
disturbing otherfunctionality. Lexi's object structure mimics the
document's physical structure.
This approach has two important implications. The first is obvious:The objects
need corresponding classes. The second implication, which may be less obvious,
is that these classes must have compatible interfaces, because we want to treat
the objects uniformly. The way tomake interfaces compatible in a language like
C++ is to relate the classes through inheritance.

We'll define a Glyph abstract class for allobjects that can appear in a document
structure.3 Its subclasses define bothprimitive graphical elements (like
characters and images) andstructural elements (like rows and columns).

The Child operation returns the child (if any) at the givenindex. Glyphs like
Row that can have children should use Childinternally instead of accessing the
child data structure directly. That wayyou won't have to modify operations like
Draw that iteratethrough the children when you change the data structure from,
say, an arrayto a linked list.Similarly, Parent provides a standard interfaceto
the glyph's parent, if any. Glyphs in Lexi store a reference totheir parent, and
their Parent operation simply returns thisreference.

Recursive composition is good for more than just documents. We can useit to
represent any potentially complex, hierarchical structure. TheComposite (183)
pattern captures the essence ofrecursive composition in object-oriented terms.


