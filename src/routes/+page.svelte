<script lang="ts">
    // import Todo class from todo.ts
    
    // make array of Todos

    // make add Todo function that grabs the text input,
    // increases the index, and pushes a new Todo to the array
    
    // make remove Todo function that takes an index
    // and splices the array at that index
    
</script>


<div class="newtodo">
    <input type="text" id="newtodotext" name="paragraph_text" placeholder="Do homework...">
    <hr>
    <button id="newtodosubmit" onclick={}><!-- call add Todo -->+</button>
</div>

<div class="header">
    <h1>To Do:</h1>
</div>

{#each _ as todo}<!-- use todo array -->
    <div class="todo">
        <section>
            <h2>{}<!-- get title --></h2>
            <h4>ID: {}<!-- get index --></h4>
        </section>
        <button id="todoremove" onclick={}><!-- call remove Todo using index -->X</button>
    </div>
{/each}

<style>
    :global(*) {
    	margin: auto;
    	padding: 0;
        background-color: black;
        color: white;
        box-sizing: border-box;
  	}
    .todo {
        margin-bottom: 5vh;
        padding: 2vh;
        width: 50%;
        border: 2px solid white;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
    }
    .todo section {
       flex-grow: 10;
    }
    #todoremove {
        padding: 12px;
        border-radius: 5px;
        color: black;
        background-color: red;
        font-size: large;
        flex-grow: 0.1;
    }
    .newtodo {
        margin-top: 20vh;
        margin-bottom: 10vh;
        padding: 2vh;
        width: 50%;
        border: 2px solid white;
        border-radius: 10px;
    }
    input {
        border-width: 0px;
    }
    #newtodotext {
        width: 100%;
        min-height: 20%;
        padding: 12px;
        display: inline-block;
        font-size: large;
    }
    #newtodosubmit {
        width: 10%;
        min-height: 20%;
        padding: 12px;
        border-radius: 5px;
        color: black;
        background-color: green;
        box-sizing: border-box;
        display: inline-block;
        font-size: large;
        align-self: flex-end;
    }
    hr {
        margin: 1vh -2vh;
        height: 1px;
        border-width: none;
        color: white;
        background-color: white;
    }
    .header {
        margin-bottom: 5vh;
        font-size: large;
        text-align: left;
        width: 50%;
    }
</style>