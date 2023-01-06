import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { logo } from '../assets'
import { SocialIcon } from 'react-social-icons'

const Footer = () =>
{
    const solutions = ["Marketing", 'Analytics', 'Commerce', 'Insights']
    const support = ["Pricing", 'Docs', 'Guides', 'API Status']
    const company = ["About", 'Blog', 'Jobs', 'Press']
    const legal = ["Claim", 'Privacy', 'Terms']



    return (
        <footer className='border-t-2 pt-4'>
            <div className='flex '>
                <div className='flex flex-col p-6 pr-20'>
                    <div className=''>
                        <Image src={ logo } width={ 100 } height={ 100 } alt="Artist AI" priority />
                    </div>
                    <div>
                        <p className='flex flex-wrap'>Our mission is to make are both beatiful and smart</p>
                    </div>
                    <div className='flex pt-2'>
                        <SocialIcon url='https://linkedin.com' style={ { height: 30, width: 30 } } className="mx-2" bgColor='gray' />
                        <SocialIcon url='https://facebook.com' style={ { height: 30, width: 30 } } className="mx-2" bgColor='gray' />
                        <SocialIcon url='https://instagram.com' style={ { height: 30, width: 30 } } className="mx-2" bgColor='gray' />
                        <SocialIcon url='https://twitter.com' style={ { height: 30, width: 30 } } className="mx-2" bgColor='gray' />
                    </div>
                </div>
                <div className='flex flex-grow flex-wrap justify-around pt-6'>
                    <div className='flex flex-col'>
                        <h2 className="font-bold p-auto">Solutions</h2>
                        { solutions.map((solution, i) => (
                            <Link href='#' key={ i }>{ solution }</Link>
                        )) }
                    </div>
                    <div className='flex flex-col'>
                        <h2 className="font-bold p-auto">Support</h2>
                        { support.map((solution, i) => (
                            <Link href='#' key={ i }>{ solution }</Link>
                        )) }
                    </div>
                    <div className='flex flex-col'>
                        <h2 className="font-bold p-auto">Company</h2>
                        { company.map((solution, i) => (
                            <Link href='#' key={ i }>{ solution }</Link>
                        )) }
                    </div>
                    <div className='flex flex-col'>
                        <h2 className="font-bold p-auto">Legal</h2>
                        { legal.map((solution, i) => (
                            <Link href='#' key={ i }>{ solution }</Link>
                        )) }
                    </div>
                </div>
            </div>
            <hr />
            <p className='py-4 text-center text-gray-500'>© Copyright Artist AI, Inc. All rights reserved</p>


        </footer>
    )
}

export default Footer