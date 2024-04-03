import * as React from 'react';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = () => {
    return (
        <div className="bg-slate-900"> 
         <div className='container p-2 mx-a'>
            <nav className='py-5'>
                <div className=''>URLShortener</div>
            </nav>
         </div>
        </div>
    );
};

export default Header;