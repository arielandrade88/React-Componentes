import React from 'react'
import TopBar from './TopBar'
import ContentRowTop from './ContentRowTop'
import Footer from './Footer'
import Table from './Table'

function ContentWrapper() {
    return (
        <div id="content-wrapper" class="d-flex flex-column">
            < TopBar />
            < ContentRowTop />
            <Table/>
            < Footer />
        </div>
    )
}

export default ContentWrapper

