function loadNavbar() {
    html_code = `
        <ul class="nav-menu nav-center">
        <li><a href="https://github.com/s-3ntinel"><img src="/github_logo.png" /></a></li>
        <li><a href="#">CTFs <i class="arrow down"></i></a>
            <ul>
            <li><a href="#">Fword_ctf2020 <i class="arrow right"></i></a>
                <ul>
                <li><a href="#">bash <i class="arrow right"></i></a>
                    <ul>
                    <li><a href="/ctfs/fword_ctf2020/bash/bash_is_fun.html">bash is fun</a></li>
                    <li><a href="/ctfs/fword_ctf2020/bash/jail_boss.html">jail boss</a></li>
                    </ul>
                </li>
                </ul>
            </li>
            <li><a href="#">Poseidon_ctf2020 <i class="arrow right"></i></a>
                <ul>
                <li><a href="#">misc <i class="arrow right"></i></a>
                    <ul>
                    <li><a href="/ctfs/poseidon_ctf2020/misc/young_blaze/young_blaze.html">young blaze</a></li>
                    <li><a href="/ctfs/poseidon_ctf2020/misc/search/search.html">search</a></li>
                    </ul>
                </li>
                </ul>
            </li>
            </ul>
        </li>
        <li><a href="#">Hach the box <i class="arrow down"></i></a>
            <ul>
            <li><a href="#">Challenges <i class="arrow right"></i></a>
                <ul>
                <li><a href="#">Web <i class="arrow right"></i></a>
                    <ul>
                    <li><a href="/hackthebox/challenges/web/baby_interdimensional_internet/baby_interdimensional_internet.html">Baby interdimensional internet</a></li>
                    <li><a href="/hackthebox/challenges/web/weather_app/weather_app.html">Weather app</a></li>
                    </ul>
                </li>
                </ul>
            </li>
            </ul>
        </li>
        </ul>
    `

    document.getElementById("load-navbar").innerHTML = html_code;
}

loadNavbar();