document.addEventListener('DOMContentLoaded', function() {
    var aboutLink = document.getElementById('about-link');
    var skillsLink = document.getElementById('skills-link');
    var plansLink = document.getElementById('plans-link');
    
    var aboutSection = document.getElementById('about');
    var skillsSection = document.getElementById('skills');
    var plansSection = document.getElementById('plans');

    var widget = document.querySelector('.widget');
    var canvas = document.getElementById("airbnbCanvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    img.src = "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/eKqZ/image/kJg2Kmw6CeDsP2i-QQJt81_u_40.png";
    
    
    
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(aboutSection);
    });

    skillsLink.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(skillsSection);
    });

    plansLink.addEventListener('click', function(event) {
        event.preventDefault();
        showSection(plansSection);
    });
    
    function showSection(section) {
        document.querySelectorAll('.content-section').forEach(sec => {
            sec.classList.remove('active');
        });
        section.classList.add('active');
        if (section === aboutSection) {
            widget.style.display = 'block';
        } else {
            widget.style.display = 'none';
        }
    }
    
    
    showSection(aboutSection);

    document.querySelectorAll('.widget a').forEach(widgetLink => {
        widgetLink.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

   

    
    var birthDate = new Date('1999-10-02T09:00:00'); 

    function updateTimeSinceBirth() {
        var now = new Date();
        var elapsedTime = now - birthDate;

        var years = Math.floor(elapsedTime / (365.25 * 24 * 60 * 60 * 1000));
        var months = Math.floor((elapsedTime % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
        var days = Math.floor((elapsedTime % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
        var hours = Math.floor((elapsedTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        var minutes = Math.floor((elapsedTime % (60 * 60 * 1000)) / (60 * 1000));
        var seconds = Math.floor((elapsedTime % (60 * 1000)) / 1000);

        document.getElementById('time-since-birth').textContent = 
            `태어난 이후로 지난 시간: ${years}년 ${months}개월 ${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
    }

    
    updateTimeSinceBirth();
    setInterval(updateTimeSinceBirth, 1000);
});
