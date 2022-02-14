import React from 'react'
import coding from '../pictures/coding.svg'
import background from '../pictures/bgcode.jpeg'
const About = () => {
    return (
        <section className='min-h-screen flex justify-center items-center ' style={{ backgroundImage: `url(${background})` }} >
            <div className='about bg-zinc-900 bg-opacity-75  rounded-md p-8 m-8 lg:flex justify-center items-center '>
                <div className="flex-1">
                    <h1 className='text-center	'>About me.</h1>
                    <p className='text-justify my-8'  >Lorem ipsum dolor sit non placerat nibh dapibus vitae. Proin pulvinar dui at ipsum commodo, ut dictum id, maximus commodo libero. Etiam et dui purus. Nulla vel diam et libero dictum sagittis et sit amet odio. Donec efficitur, lectus id tristique vestibulum, lacus sem facilisis tortor, a dictum quam leo vitae est. Vivamus et aliquam metus, a sollicitudin lacus. Etiam nunc velit, mattis et tempor nec, feugiat id sapien. Sed commodo, orci vel ultricies fringilla, dui leo tempus sapien, non feugiat ex leo at purus. Donec at blandit dui. Integer ut eros eget purus lacinia luctus ut eget ante. Nulla facilisi. In vitae tristique mauris.
                        Proin condimentum laoreet purus suscipit tincidunt. Maecenas sed felis et ante feugiat congue.</p>
                    <button class="bg-amber-600 hover:bg-amber-800 p-3 rounded-sm ">
                        See my projects ?
                    </button>
                </div>
                <div className="about-img flex-1 object-center "><img className='rounded-md' src={coding} alt="" /></div>


            </div>

        </section>

    )
}

export default About
