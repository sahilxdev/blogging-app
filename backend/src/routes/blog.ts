import { Hono } from "hono";

export const Router = new Hono();

Router.post('/', (c) => {
  
    return c.text('signin route')
})
  
Router.put('/', (c) => {
    return c.text('signin route')
})
  
Router.get('/:id', (c) => {
    const id = c.req.param('id')
    console.log(id);
    return c.text('get  route')
})
  
Router.get('/bulk', (c) => {
    return c.text("hello")
})