import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import PostAddForm from "../PostAddForm/PostAddForm";
import PostList from "../PostList/PostList";
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter";
import SearchPanel from "../SearchPanel/SearchPanel";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          label: "Type",
          important: false,
          like: false
        },
        {
          id: 2,
          label: "Text",
          important: false,
          like: false
        },
        {
          id: 3,
          label: "Anything you want",
          important: false,
          like: false
        },
      ],
      term: '',
      filter: 'all',
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUptadeSearch = this.onUptadeSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);

    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after];

      return {
        data: newArr,
      };
    });
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }

  onToggleLiked(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id)
      const oldItem = data[index]
      const newItem = {...oldItem, like: !oldItem.like}
      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, newItem, ...after]

      return{
        data: newArr
      }
    })
  }

  onToggleImportant(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id)
      const oldItem = data[index]
      const newItem = {...oldItem, important: !oldItem.important}
      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, newItem, ...after]

      return{
        data: newArr
      }
    })
  }

  searchPost(items, term) {
    if(term.length === 0) {
      return items
    }

    return items.filter(item => {
      return item.label.indexOf(term) > -1
    })
  }

  filterPost(items, filter) {
    if(filter === 'like'){
      return items.filter(item => item.like)
    } else if(filter === 'important'){
      return items.filter(item => item.important)
    } else{
      return items
    }
  }

  onUptadeSearch(term) {
    this.setState({term})
  }

  onFilterSelect(filter){
    this.setState({filter})
  }

  render() {
    const { data, term, filter } = this.state
    const liked  = data.filter(item => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter)

    return (
      <div className="app">
        <AppHeader liked={liked} allPosts={allPosts}/>
        <div className="d-flex search pb-3">
          <SearchPanel onUptadeSearch={this.onUptadeSearch} />
          <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <PostList 
          posts={visiblePosts} 
          onDelete={this.deleteItem} 
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
