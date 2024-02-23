import { Facebook, Instagram, WhatsApp } from './icons'
import { LinkFooter } from './ui'

export default function Footer() {
  return (
    <footer className='p-6 md:px-14 md:pt-14 pb-6 bg-slate-five '>
      <div className='flex px-8 md:px-0 flex-wrap justify-between items-center'>
        <div className='w-full text-center md:text-left md:w-[35%]'>
          <h2 className='text-2xl font-bold'>Name</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error odit
            distinctio quod voluptatem, saepe natus quam libero reiciendis, hic
            est, rem quibusdam nemo voluptates tenetur quidem beatae facilis
            nisi laboriosam!
          </p>
          <article className='py- flex gap-3 justify-center w-full'>
            <LinkFooter href='#'>
              <Facebook />
            </LinkFooter>
            <LinkFooter href='#'>
              <Instagram />
            </LinkFooter>
            <LinkFooter href='#'>
              <WhatsApp />
            </LinkFooter>
          </article>
        </div>
        <div className='flex justify-evenly gap-1 flex-wrap md:w-[64%] w-full py-4'>
          <div>
            <h3 className='text-lg font-bold'>Mercaplace</h3>
            <LinkFooter href='#'>Buy Product</LinkFooter>
            <LinkFooter href='#'>Sell Product</LinkFooter>
            <LinkFooter href='#'>Our Creator</LinkFooter>
          </div>
          <div>
            <h3 className='text-lg font-bold'>Resource</h3>
            <LinkFooter href='#'>About Us</LinkFooter>
            <LinkFooter href='#'>Event</LinkFooter>
            <LinkFooter href='#'>Tutorial</LinkFooter>
          </div>
          <div>
            <h3 className='text-lg font-bold'>Company</h3>
            <LinkFooter href='#'>Media</LinkFooter>
            <LinkFooter href='#'>Blog</LinkFooter>
            <LinkFooter href='#'>Pricing</LinkFooter>
          </div>
          <div>
            <h3 className='text-lg font-bold'>Legal</h3>
            <LinkFooter href='#'>Terms</LinkFooter>
            <LinkFooter href='#'>Privacy</LinkFooter>
            <LinkFooter href='#'>Support</LinkFooter>
          </div>
        </div>
      </div>
      <p className='w-full text-center'>©️ 2024 name, All rights reserved</p>
    </footer>
  )
}
