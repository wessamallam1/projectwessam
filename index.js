const SidMenu = document.querySelector('.navbar');
const MenuBtb=document.querySelector("#menu-btn");
const closeBtn= document.querySelector("#close-btn");
const themeToggler = document.querySelector('.theme-toggler')

// show sidebar
MenuBtb.addEventListener('click', ()=>{
    SidMenu.style.display='block'
})
// close sidebar
closeBtn.addEventListener('click',()=>{
    SidMenu.style.display='none'
})

// change theme
themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables');
     
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
     
    
})

// fill orders in table
Orders.forEach(order=>{
    const tr = document.createElement('tr');
    const trContent=`
                <td>${order.productName}</td>
                <td>${order.ProductNumber}</td>
                <td>${order.paymentStatus}</td>
                <td class="${order.shipping ===
                'Declined'? 'danger' : order
                .shipping === 'pending' ? 'warning' :
                'primary'}">${order.shipping}</td>
                <td class="primary">Details</td>
                `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr)            

})