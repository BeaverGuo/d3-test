//css related
1.remove highlight of input when focused?
/*
In your case, try:

input.middle:focus {
    outline-width: 0;
}
Or in general, to affect all basic form elements:

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
In the comments, Noah Whitmore suggested taking this even further to support elements that have the contenteditable attribute set to true (effectively making them a type of input element). The following should target those as well (in CSS3 capable browsers):

[contenteditable="true"]:focus {
    outline: none;
}
Although I wouldn't recommend it, for completeness' sake, you could always disable the focus outline on everything with this:

*:focus {
    outline: none;
}
Keep in mind that the focus outline is an accessibility and usability feature; it clues the user into what element is currently focused.
*/
2.git error: Your local changes to the following files would be overwritten by merge:
wp-content/w3tc-config/master.php
Please, commit your changes or stash them before you can merge.
/*You can't merge with local modifications. Git protects you from losing potentially important changes.

You have three options.

1. Commit the change using

    git commit -m "My message"
2. Stash it.

Stashing acts as a stack, where you can push changes, and you pop them in reverse order.

To stash type:

git stash
Do the merge, and then pull the stash:

git stash pop
3. Discard the local changes

using git reset --hard.
*/
3.disabled style?
select option:disabled {
    color: #000;
    font-weight: bold;
}

4.disable whole div
$("#test *").attr("disabled", "disabled").off('click');

5.git
git config --global user.name "My Name"
git config --global user.email "myemail"
git config --global GitHub.user myusername
