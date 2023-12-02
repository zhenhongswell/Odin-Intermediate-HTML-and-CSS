



const toggleTheme= document.querySelector('.toggleTheme');
toggleTheme.addEventListener("click",()=>{
    changeTheme();
});

function changeTheme(){
    const root =document.documentElement;
    const newTheme = root.className === 'dark'?'light':'dark';
    root.className = newTheme;

    document.querySelector('.theme-name').textContent = newTheme;
}