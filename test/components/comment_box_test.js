import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  })

  it('has the correct class', () => {
    expect(component).to.have.class('comment-box')
  })
  it('has a text area', () => {
    expect(component.find('textarea')).to.exist
  })
  it('has a button', () => {
    expect(component.find('button')).to.exist
  })
  describe('entering some text',() => {

    beforeEach(() => {
      component.find('textarea').simulate('change', 'test comment')
    })
    it('shows text that text in the testarea', () => {
      expect(component.find('textarea')).to.have.value('test comment')
    })
    it('should clear input onSubmit', ()=> {
      component.simulate('submit')
      expect(component.find('textarea')).to.have.value('')
    })
  })

})
