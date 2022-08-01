const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const helper = require('./test_helper')

describe('Getting blogs from api', () => {

    test('returns blogs from HTTP GET request', async () => {
        const response = await api.get('/api/blogs')
        expect(response.body).toHaveLength(1)
    })
})

describe('Adding blogs', () => {

    test('Adding a blog through HTTP POST saves it in db', async () => {
        const newBlog = {
            title: 'Adding blog to test db',
            author: 'Doug',
            url: 'mongodb test db',
            likes: 100,
        }

        await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

        const blogsAtEnd = await helper.blogsInDb()
            expect(blogsAtEnd).toHaveLength(2)

            const titles = blogsAtEnd.map(blog => blog.title)
            expect(titles).toContain(
                'Adding blog to test db'
            )
    })
})  

// test('blogs are returned as json', async () => {
//     await api.get('/api/blogs').expect(200).expect('Content-type', )
// })

afterAll(() => {
    mongoose.connection.close()
})