<h2>Motivation</h2>
Show perforamce problem and solution using useCallback

<h2>Problem</h2>
<ul>
<li>Parent component change a state - count1 which cause render also to its child ChildPureComponent even though ChildPureComponent is a pure component and it has nothing to do with counter 1</li>
<li>The PureComponent will not render (by design) if there is no props change . However, the prop clickHandler is changing not because it has anything with counter 1, its changing because its inline and created every render</li>
</ul>


<h2>Solution</h2>
The prop to ChildPureComponent - clickHandler is used with useCallback and changing counter 1 does not cause render of ChildPureComponent

<h2>Setup</h2>
<p>npm i</h2>
<p>npm run dev</h2>
