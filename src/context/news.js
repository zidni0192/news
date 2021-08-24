import React, { Component, createContext } from 'react'

import { fetchNews } from '../api/news'

export const NewsContext = createContext()

export class NewsContextProvider extends Component {
    state = {
        categories: [],
        categoryList: [],
        error: null
    }

    getNews = async () => {
        const result = await fetchNews()
        if (result.message !== "SUCCESS" && result.code !== 200) {
            this.setState({ error: "Gagal Memuat Data" })
        } else {
            this.setState({ ...result.result })
        }
    }

    componentDidMount() {
        this.getNews()
    }

    setNews = data => this.setState({ ...data })

    render() {
        return (
            <NewsContext.Provider
                value={{ ...this.state, setNews: this.setNews }}
            >
                {this.props.children}
            </NewsContext.Provider>
        )
    }
}

export const NewsContextConsumer = NewsContext.Consumer

export const withNewsConsumer = WrappedComponent => {
    return props => (
        <NewsContextConsumer>
            {NewsContextValue => {
                return (
                    <WrappedComponent
                        {...props}
                        {...NewsContextValue}
                    />
                )
            }}
        </NewsContextConsumer>
    )
}
