const FollowToggle = {
    constructor(button){
        this.userId = button.dataset.userId;
        this.followState = button.dataset.initialFollowState; 
        // can be changed to followed/unfollowed strings if needed
        this.$el = $(button);
        this.render();
        console.log("Hey we ran");

        // put in event listener here!
        this.$el.on("click",(e) => this.handleClick(e));
    },

    render() {
        if (this.followState === true ){
            this.$el.text('Unfollow!');
        }
        else{
            this.$el.text('Follow!');
        }
    },

    handleClick(e) {

        e.preventDefault();
        console.log("click handled");


        if (this.followState === true) {
            console.log("first here");
            $.ajax({
                url: '/users/' + this.userId + '/follow', method: 'DELETE', datatype: 'JSON'})
                .then(() => {
                this.followState = !this.followState;
                this.render();
            });
        } else {
            console.log("second here");

            $.ajax({url: '/users/' + this.userId + '/follow', method: 'POST', datatype: 'JSON'}).
                then(() => {
                this.followState = !this.followState;
                this.render();
            });
            
        }
 
        //$.ajax({ url: ‘/squirrels’, method: ‘POST’, data: …}, datatype: ‘JSON’, }).then(res => console.log(res)).fail(err => console.log(err));

        // (1) set up event listener in case someone clicks = put in constructor

        // (2) be the actual set of steps that happen if someone clicks  // we do (2) here?

        // prevent default action = don't take to new page
        // make ajax request
        // on success (= promise), toggle followState and re-render

 
        //


    } 
}





module.exports = FollowToggle;