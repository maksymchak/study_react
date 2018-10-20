const articleObj = {
    title: 'Article title',
    author: 'Anton Maksymchak',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus ex ad sapiente. Aut reprehenderit odit nam, repellat aliquam ut est eligendi voluptate velit voluptatum, ullam aliquid a blanditiis officia eos.'
};  

const articleComponent = React.createClass({
    render() {
        const {title, author, text} = this.props;
        return React.createElement('div', {},
            React.createElement('h1', {}, title),
            React.createElement('span', {}, `by ${author}`),
            React.createElement('p', { style: { width: '400px' }}, text)
        );
    }
});

ReactDOM.render(
    React.createElement(articleComponent, articleObj),
    document.getElementById('article')
)