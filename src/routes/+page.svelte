<script lang="ts">
    import Todo from "./todo.svelte"
</script>


<div class="newtodo">
    <form action="/action_page.php">
        <input type="text" id="newtodotext" name="paragraph_text" placeholder="Do homework...">
        <hr>
        <input type="submit" id="newtodosubmit" name="newtodosubmit" value="+">
    </form>
</div>

<div class="header">
    <h1>To Do:</h1>
</div>

<!-- todos -->

<style>
    :global(*) {
    	margin: auto;
    	padding: 0;
        background-color: black;
        color: white;
        box-sizing: border-box;
  	}
    .newtodo {
        margin-top: 20vh;
        margin-bottom: 10vh;
        padding: 2vh;
        width: 50%;
        border: 2px solid white;
        border-radius: 10px;
    }
    .newtodo form {
        display: flex;
        flex-direction: column;
    }
    input {
        border-width: 0px;
    }
    #newtodotext {
        width: 100%;
        min-height: 20%;
        padding: 12px;
        box-sizing: border-box;
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