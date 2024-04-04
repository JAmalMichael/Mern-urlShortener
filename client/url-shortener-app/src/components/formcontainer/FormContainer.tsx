import * as React from 'react';

interface IFormContainerProps {}

const FormContainer: React.FunctionComponent<IFormContainerProps> = () => {
    return (
    <div className='container mx-auto p-2'>
        <div className='bg-banner my-8 rounded-xl bg-cover bg-center'>
            <div className='w-full h-full rounded-xl p-20 backdrop-brightness-50'>
            <h2 className='text-white text-4xl text-center pb-4'>
                URL Shortener
            </h2>
            <p className='text-white text-center pb-2 text-xl font-extralight'>
                Link goes here!!
            </p>
            <p className='text-white text-center pb-4 text-sm font-thin'>
                Free tool to shorten and reduce a URL link</p>
            </div>
        </div>
    </div>
    );
};

export default FormContainer;