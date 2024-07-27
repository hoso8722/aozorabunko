"use client"
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

const NewBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleTagInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const addTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput('');
    }
  };

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res: Response = await fetch('/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          author,
          price,
          publishDate,
          tags,
        })
      });
      console.log(res)
      if (res.ok) {
        console.log('response OK')
        // router.push('/');
      }
    } catch (error) {
      console.error('Failed to register book', error);
    }
  };

  return (
    <div>
      <h1 className="font-bold">New Book</h1>
      <form onSubmit={onSubmitHandler} action='/api/form' method='POST'>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Publish Date:</label>
          <input
            type="date"
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
          />
        </div>
        <div>
          <label>Tags:</label>
          <input
            type="text"
            value={tagInput}
            onChange={handleTagInput}
          />
          <button type="button" onClick={addTag}>Add Tag</button>
          <div>
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewBook;
