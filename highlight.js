AFRAME.registerComponent('cursor-listener',{
    schema:{
         selected_item_id:{default:'',type:'string'}
    },
    init:function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },
    handleComics_listState:function (){
        const id= this.el.getAttribute('id')
        const comics_id=["wings-of-fire", "sonic-the-hedgehog", "star-wars", "marvel"]
        if(comics_id.includes(id)){
            const comics_containers=document.querySelector('#comics-container')
            comics_containers.setAttribute('cursor-listener',{selected_item_id:id})
            this.el.setAttribute('material',{color:'orange',opacity:1})
        }
    },
    handleMouseEnterEvents:function(){
        this.el.addEventListener('mouseenter',()=>{
            this.handleComics_listState()
        })
    },
    handleMouseLeaveEvents:function(){
        this.el.addEventListener('mouseleave',()=>{
            const {selected_item_id}=this.data
            if(selected_item_id){
                const el=document.querySelector(`#${selected_item_id}`)
                const id=el.getAttribute('id')
                if (id==selected_item_id){
                    el.setAttribute('material',{color:'red',opacity:1})
                }
            }
        })
    },
})