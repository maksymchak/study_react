const ArticleComponent = React.createClass({
    render() {
    	const {
    		title,
    		author,
    		text,
    		likes,
    		comments
    	} = this.props;

        return (
            <div>
                <h1>{title}</h1>
                <span>by {author}</span>
                <p>{text}</p>
                <br/>
                <div className="stats">
                    <i className="stat-icon fa fa-heart" />
                    {likes}
                    <i className="stat-icon fa fa-comment" />
                    {comments}
                </div>
            </div>            
        );
    }
});

ReactDOM.render(
    <ArticleComponent
		title="Article title"
		author="Anton Maksymchak"
    	text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ex ad sapiente. Aut reprehenderit odit nam, repellat aliquam ut est eligendi voluptate velit voluptatum, ullam aliquid a blanditiis officia eos."			
    	likes={121}
    	comments={34}
    />,
    document.getElementById('article')
); 