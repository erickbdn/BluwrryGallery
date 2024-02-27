<script>

</script>

<footer class="footer">
    <div class="footer-title">LET'S COLLABORATE</div>
    <ul>
        <li class="footer-email"><a href="/">email@gmail.com</a></li>
        <li class="footer-linkedin"><a href="/">linkedinurl.com</a></li>
        <li class="footer-instagram"><a href="/">@instagram</a></li>
        <li class="footer-twitter"><a href="/">@twitter</a></li>
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
    height: 5vh;
    }

    .footer-title { 
        grid-area: 1 / 1 / 6 / 11; 
    }

    .footer-email { 
        grid-area: 7 / 1 / 8 / 6; 
    }
    
    .footer-linkedin { 
        grid-area: 8 / 1 / 9 / 6; 
    }

    .footer-instagram { 
        grid-area: 9 / 1 / 10 / 6; 
    }

    .footer-twitter { 
        grid-area: 10 / 1 / 11 / 6; 
    }

    .collab { 
        grid-area: 10 / 7 / 11 / 11; 
        }
</style>
