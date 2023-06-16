import { PostData, getPosts } from '../../../../api/posts'
import { FormContainer } from './styles'
import { FocusEvent, FormEvent } from 'react'

interface SearchFormProps {
  changePosts: (newPosts: PostData[]) => void
  numberOfPosts: number
}

export function SearchForm({ changePosts, numberOfPosts }: SearchFormProps) {
  async function handleSearchPosts(e: FocusEvent<HTMLInputElement>) {
    const newPosts = await getPosts(e.target.value)
    changePosts(newPosts)
  }

  function handleFormSubmission(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <FormContainer>
      <header>
        <h2>Publicações</h2>
        <span>
          {numberOfPosts} {numberOfPosts === 1 ? 'publicação' : 'publicações'}
        </span>
      </header>
      <form onSubmit={handleFormSubmission}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          onBlur={handleSearchPosts}
        />
      </form>
    </FormContainer>
  )
}
