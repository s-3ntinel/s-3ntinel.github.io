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
            <li><a href="#">CyberApocalypse_ctf2021 <i class="arrow right"></i></a>
                <ul>
                <li><a href="#">web <i class="arrow right"></i></a>
                    <ul>
                    <li><a href="/ctfs/cyberapocalypse_ctf2021/web/blitzprop/blitzprop.html">Blitzprop</a></li>
                    <li><a href="/ctfs/cyberapocalypse_ctf2021/web/bug_report/bug_report.html">Bug Report</a></li>
                    <li><a href="/ctfs/cyberapocalypse_ctf2021/web/caas/caas.html">CaaS</a></li>
                    <li><a href="/ctfs/cyberapocalypse_ctf2021/web/daas/daas.html">DaaS</a></li>
                    <li><a href="/ctfs/cyberapocalypse_ctf2021/web/etree/etree.html">E.Tree</a></li>
                    <li><a href="/ctfs/cyberapocalypse_ctf2021/web/ministryplace/ministryplace.html">MiniSTRyplace</a></li>
                    <li><a href="/ctfs/cyberapocalypse_ctf2021/web/the_galactic_times/the_galactic_times.html">The Galactic Times</a></li>
                    <li><a href="/ctfs/cyberapocalypse_ctf2021/web/wild_goose_hunt/wild_goose_hunt.html">Wild Goose Hunt</a></li>
                    </ul>
                </li>
                <li><a href="#">misc <i class="arrow right"></i></a>
                    <ul>
                    <li><a href="/ctfs/cyberapocalypse_ctf2021/misc/alien_camp/alien_camp.html">Alien Camp</a></li>
                    <li><a href="/ctfs/cyberapocalypse_ctf2021/misc/build_yourself_in/build_yourself_in.html">Build yourself in</a></li>
                    </ul>
                </li>
                </ul>
            </li>
            </ul>
        </li>
        <li><a href="#">Hack the box <i class="arrow down"></i></a>
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