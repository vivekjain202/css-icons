import React, { createContext } from 'react'

const Context = createContext()

export class IndexDBProvider extends React.Component{
    constructor(){
        super();
        let request = window.indexedDB.open('myDB', 1)
        let that = this;
        this.dbReadyPromise = new Promise(res=>{
            request.onupgradeneeded = function(data) {
                that.indexDb = data.target.result;
                that.indexDb.createObjectStore("icon", { keyPath: "id" });
            };
      
            request.onsuccess = function(data) {
                that.indexDb = data.target.result;
                res();
            };
        })
    }

    async addData(data){
        await this.dbReadyPromise
        return this.indexDb.transaction(['icon'], 'readwrite').objectStore('icon').put(data)
    }

    async getData(id){
        await this.dbReadyPromise
        return this.indexDb.transaction(['icon']).objectStore('icon').get(id)
    }
    render(){
        return <Context.Provider value={this}>{this.props.children}</Context.Provider>
    }
}

export default Context