import Banner from "@/components/MainBanner/Banner";
import { data } from "../../constants/data";
import Footer from "../Footer/Footer";

const Abreviations: React.FC = () => {
  const heroData = data[8]; // selecciona el primer objeto de datos, por ejemplo

  return (
    <>
      <Banner title={heroData.title} description={heroData.description} thumbnail={heroData.thumbnail} />
      <div className='container mx-auto mt-3'>
  <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
    <div className='p-3'>
      <p className='text-lg'>
        An abbreviation is a shortened form of a word or words; because there are different ways to shorten words, there are a few different types of abbreviations. For example, you could get rid of a syllable or two, create a contraction, or use the first letters of multiple words to create an entirely new word.
      </p>
      <p className='mt-3'>
        If you want to make an abbreviation, you have several options. In this guide, we explain the types of abbreviations, describe how they work, and provide plenty of abbreviation examples so you can see how it’s done.
      </p>
    </div>
    <div className='p-3'>
      <article>
        <h2 className='text-2xl font-bold'>What are abbreviations in English?</h2>
        <p className='mt-3'>
          An abbreviation is just a short version of a longer word or a phrase. For example, the word ad is an abbreviation of advertisement, and the word don’t is an abbreviation of do not. Abbreviations are prevalent in both speaking and writing. They’re present in most languages as well, so abbreviations in English aren’t the only ones.
        </p>
        <p className='mt-3'>
          The purpose of abbreviations is to make communication more efficient by using smaller words. This is most apparent in acronyms, one of the types of abbreviations we discuss below. An acronym takes the first letter (or letters) of a set of words and adds them together to create a brand-new word. In this way, an acronym replaces a long string of words with just a single one, making communication that much easier.
        </p>
      </article>
    </div>
    <div className='p-3'>
      <article>
        <h2 className='text-2xl font-bold'>Types of abbreviations: What are the 5 abbreviation types?</h2>
        <p className='mt-3'>
          There are a few different ways to shorten words, and not all of them can be used on every word. Before we discuss the types of abbreviations individually, here’s a quick list of them so you know what to expect. We’ll describe how each of these terms is commonly used, but you should be aware that exact definitions sometimes vary.
        </p>
        <ul className='list-disc list-inside mt-3'>
          <li>Clipping: removing entire syllables to make words shorter</li>
          <li>Contractions: removing certain letters to make words shorter, and sometimes combining two or more words, with missing letters replaced by an apostrophe</li>
          <li>Initialism: combining the first letters of multiple words, with the result pronounced as individual letters</li>
          <li>Acronyms: combining the first letters of multiple words, with the result pronounced as a new word</li>
          <li>Textese (online slang): a modern form of communication that uses individual letters, numbers, and symbols to reduce typing time</li>
        </ul>
        <p className='mt-3'>
          Below we explain how each type of abbreviation works, including some common examples for each.
        </p>
      </article>
    </div>
    <div className='p-3'>
      <article>
        <h2 className='text-2xl font-bold'>Clipping Abbreviations</h2>
        <p className='mt-3'>
          Clipping is a type of abbreviation where syllables are removed from a word to make it shorter. Here are some examples of clipping abbreviations:
        </p>
        <ul className='list-disc list-inside mt-3'>
          <li>Ad (advertisement)</li>
          <li>Bike (bicycle)</li>
          <li>Fam (family)</li>
          <li>Gym (gymnasium)</li>
          <li>Vet (veterinarian)</li>
        </ul>
        <p className='mt-3'>
          As you can see, clipping often involves taking the beginning or ending of a word and dropping the rest.
        </p>
      </article>
    </div>
    <div className='p-3'>
      <article>
        <h2 className='text-2xl font-bold'>Contractions</h2>
        <p className='mt-3'>
          Contractions are another type of abbreviation where certain letters are removed from a word. Contractions can also involve combining two or more words, with missing letters replaced by an apostrophe. Here are some examples of contractions:
        </p>
        <ul className='list-disc list-inside mt-3'>
          <li>Can't (cannot)</li>
          <li>I'm (I am)</li>
          <li>Don't (do not)</li>
          <li>Won't (will not)</li>
          <li>Shouldn't (should not)</li>
        </ul>
        <p className='mt-3'>
          Contractions are commonly used in informal writing and speech to make words and sentences flow more smoothly.
        </p>
      </article>
    </div>
    <div className='p-3'>
      <article>
        <h2 className='text-2xl font-bold'>Initialisms</h2>
        <p className='mt-3'>
          Initialisms are abbreviations formed by combining the first letters of multiple words. Unlike acronyms, initialisms are pronounced as individual letters. Here are some examples of initialisms:
        </p>
        <ul className='list-disc list-inside mt-3'>
          <li>USA (United States of America)</li>
          <li>UNESCO (United Nations Educational, Scientific and Cultural Organization)</li>
          <li>FBI (Federal Bureau of Investigation)</li>
          <li>NASA (National Aeronautics and Space Administration)</li>
          <li>HTML (Hypertext Markup Language)</li>
        </ul>
        <p className='mt-3'>
          Initialisms are often used in formal contexts and technical fields.
        </p>
      </article>
    </div>
    <div className='p-3'>
      <article>
        <h2 className='text-2xl font-bold'>Acronyms</h2>
        <p className='mt-3'>
          Acronyms are similar to initialisms as they also combine the first letters of multiple words. However, acronyms are pronounced as a new word rather than individual letters. Here are some examples of acronyms:
        </p>
        <ul className='list-disc list-inside mt-3'>
          <li>NASA (National Aeronautics and Space Administration)</li>
          <li>UNESCO (United Nations Educational, Scientific and Cultural Organization)</li>
          <li>Scuba (Self-Contained Underwater Breathing Apparatus)</li>
          <li>RadAR (RAdio Detection And Ranging)</li>
          <li>LASER (Light Amplification by Stimulated Emission of Radiation)</li>
        </ul>
        <p className='mt-3'>
          Acronyms are commonly used in various fields and often become part of everyday language.
        </p>
      </article>
    </div>
  </div>
  
 
  </div>
  <Footer />
  </>

);
}
export default Abreviations;


  
