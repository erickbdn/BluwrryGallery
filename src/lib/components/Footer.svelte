<script>

</script>

<footer class="footer">
    <div class="footer-title"><h1>LET'S <i>COLLABORATE</i></h1></div>
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
    margin-bottom: 10vh;
    }

    .footer ul {
        grid-area: 5 / 1 / 11 / 6;
        display: flex;
    flex-direction: column; /* Stack list items vertically */
    align-items: flex-start; /* Align items to the start (left) */
    justify-content: flex-end; /* Align items to the bottom */
    margin-left: 8vw;
    }

    .footer ul li {
    list-style: none; /* Remove default list style */
}

    .footer ul li a{
        text-decoration: none;
        font-size: 1em;
        color: black;
       opacity: 0.5;
    }

    .footer ul li a:hover{
        color: black;
       opacity: 1;
       font-weight: bolder;
       transition: 0.3s;
    }

    .footer-title { 
        grid-area: 2 / 1 / 5 / 11;
        font-size: 4em;
        text-align: center;
    }
    
    .collab { 
        grid-area: 10 / 6 / 11 / 11;
        text-align: right;
        margin-right: 8vw;
        font-size: 1.2em;
        }
</style>
