//fungsi splash intro
    let intro = document.querySelector('.intro');
    let text = document.querySelector('.text-wc');
    let textSpan = document.querySelectorAll('.text');

    window.addEventListener('DOMContentLoaded', ()=>{
        setTimeout(()=>{
            textSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.add('active');
                }, (idx + 1) * 400)
            })

            setTimeout(()=>{
                textSpan.forEach((span, idx)=>{
                    setTimeout(()=>{
                        span.classList.remove('active');
                        span.classList.add('fade');
                    }, (idx + 1) * 50)
                })
            }, 2500);
            setTimeout(()=>{
                intro.style.top = '-100vh';
            }, 2900);
        });
    })


//fungsi tanggal bulan tahun
    let tbt = new Date();
    let tanggal = tbt.getDate();
    const namaBulan = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    let bulan = tbt.getMonth();
    let tahun = tbt.getFullYear();
 
	document.querySelector(".dm").innerHTML = tanggal + ' ' + namaBulan[bulan];
	document.querySelector(".y").innerHTML = tahun;