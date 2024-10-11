const products = [
    {id: 'promo1', name: 'promocional 1', description: 'lorem ipsum dolor sit amet', image: './resources/blusa.jpg'},
    {id: 'promo2', name: 'promocional 2', description: 'lorem ipsum dolor sit amet', image: './resources/blusa.jpg'},
    {id: 'promo3', name: 'promocional 3', description: 'lorem ipsum dolor sit amet', image: './resources/blusa.jpg'},
    {id: 'promo4', name: 'promocional 4', description: 'lorem ipsum dolor sit amet', image: './resources/blusa.jpg'},
    {id: 'cam1', name: 'camiseta 1', description: 'lorem ipsum dolor sit amet', image: './resources/blusa.jpg'},
    {id: 'cam2', name: 'camiseta 2', description: 'lorem ipsum dolor sit amet', image: './resources/blusa.jpg'},
    {id: 'cam3', name: 'camiseta 3', description: 'lorem ipsum dolor sit amet', image: './resources/blusa.jpg'},
    {id: 'cam4', name: 'camiseta 4', description: 'lorem ipsum dolor sit amet', image: './resources/blusa.jpg'},
    {id: 'cal1', name: 'calça 1', description: 'lorem ipsum dolor sit amet', image: './resources/shirt.jpg'},
    {id: 'cal2', name: 'calça 2', description: 'lorem ipsum dolor sit amet', image: './resources/blusa.jpg'},
    {id: 'cal3', name: 'calça 3', description: 'lorem ipsum dolor sit amet', image: './resources/blusa.jpg'},
    {id: 'cal4', name: 'calça 4', description: 'lorem ipsum dolor sit amet', image: './resources/blusa.jpg'},
    {id: 'av1', name: 'avental 1', description: 'lorem ipsum dolor sit amet', image: './resources/blusa.jpg'},
    {id: 'av2', name: 'avental 2', description: 'lorem ipsum dolor sit amet', image: './resources/blusa.jpg'},
    {id: 'av3', name: 'avental 3', description: 'lorem ipsum dolor sit amet', image: './resources/blusa.jpg'},
    {id: 'av4', name: 'avental 4', description: 'lorem ipsum dolor sit amet', image: './resources/blusa.jpg'}
]

function loadProduct(){
    const url = new URLSearchParams(window.location.search);
    const id = url.get('id');
    
    products.forEach(product => {
        if(product.id==id){
            document.getElementById('productname').textContent = product.name;
            document.getElementById('description').textContent = product.description;
            const img = document.getElementById('productimg');
            img.src = product.image;
        }
    });
}