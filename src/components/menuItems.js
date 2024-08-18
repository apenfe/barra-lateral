export default{

    profile: {

        name: 'Adrian Peñalver',
        image: "perfilsinfondo.png",
        onClick(){
            console.log("hola");
        }

    },

    items: [
        {
            id: 0,
            title: 'Home',
            icon: 'house-user',
            onClick(){
                console.log("algo");
            }
        },
        {
            id: 1,
            title: 'Reports',
            icon: 'screwdriver-wrench',
            onClick(){
                console.log("reports");
            }
        },
        {
            id: 2,
            title: 'About',
            icon: 'fire',
            onClick(){
                console.log("about");
            }
        },
    ]

}