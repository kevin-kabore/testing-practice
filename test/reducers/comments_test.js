import { expect } from '../test_helper'
import commentReducer from '../../src/reducers/comments'
import { SAVE_COMMENT } from '../../src/actions/types'

describe('Comments Reducer', () => {
  it('handles action with unkown type', () => {
    expect(commentReducer(undefined, [])).to.eql([])
  })

  it('SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: 'test comment'
    }
    expect(commentReducer([], action)).to.eql(['test comment'])
  })
})
