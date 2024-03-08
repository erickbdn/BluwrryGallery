<script>

</script>

<footer class="footer">
    <div class="footer-title">L<span class="stretched-letter">E</span>T'S <i>COLLABORATE</i></div>
    <ul>
        <li class="footer-email"><a href="/">email@gmail.com</a></li>
        <li class="footer-linkedin"><a href="/">linkedinurl.com</a></li>
        <li class="footer-glints"><a href="/">glintsurl.com</a></li>
        <li class="footer-indeed"><a href="/">indeedurl.com</a></li>
        <li class="footer-milkshake"><a href="/">milkshakeurl.com</a></li>
        <li class="footer-instagram"><a href="/">instagram.com</a></li>
    </ul>
    <div class="collab">In collaboration with TBWORKS</div>
</footer>

<style>
    .footer {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  height: 50vh;
    margin-bottom: 4vh;
    }

    .footer ul {
        grid-area: 5 / 1 / 11 / 6;
        display: flex;
    flex-direction: column; /* Stack list items vertically */
    align-items: flex-start; /* Align items to the start (left) */
    justify-content: flex-end; /* Align items to the bottom */
    margin-left: 2vw;
    }

    .footer ul li {
    list-style: none; /* Remove default list style */
}

    .footer ul li a{
        text-decoration: none;
        font-size: 1.15em;
        color: black;
       opacity: 0.5;
    }

    .footer ul li a:hover{
        color: black;
       opacity: 1;
    }

    .footer-title { 
        grid-area: 2 / 1 / 5 / 11;
        font-size: 8em;
        text-align: center;
        margin-left: 2vw;
    }

    .stretched-letter {
        display:inline-block;
    -webkit-transform:scale(2.5,1); /* Safari and Chrome */
    -moz-transform:scale(2.5,1); /* Firefox */
    -ms-transform:scale(2.5,1); /* IE 9 */
    -o-transform:scale(2.5,1); /* Opera */
    transform:scale(2.5,1); /* W3C */
    margin-left: 0.4em;
    margin-right: 0.4em;
  }

    .collab { 
        grid-area: 10 / 6 / 11 / 11;
        font-size: 1.5em;
        text-align: right;
        margin-right: 2vw;
        }
</style>
