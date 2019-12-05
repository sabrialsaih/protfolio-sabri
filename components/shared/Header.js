import React from 'react';
import Link from 'next/link';
import '../../styles/styles.scss';

class Header extends React.Component {
    render() {
        const title = this.props.title;
        return (
            <React.Fragment>
                <p>Hello Brother Im here to help you, Hello again I update the file</p>
                <p style={{'fontSize': '40px', 'color': 'gray'}}>but not to see you with loseing face</p>
                <Link href='/index'>
                    <a>Home </a>
                </Link>
                <Link href='/about'>
                    <a>About </a>
                </Link>
                <Link href='/portfolios'>
                    <a>Portfolio </a>
                </Link>
                <Link href='/cv'>
                    <a>CV </a>
                </Link>
                <Link href='/blogs'>
                    <a>Blogs </a>
                </Link>
                <style jsx>
                    {`
                    p {
                        fontSize: 30px;
                        color: orange;
                    };

                    `}
                </style>
            </React.Fragment>
        )
    }
}
export default Header;