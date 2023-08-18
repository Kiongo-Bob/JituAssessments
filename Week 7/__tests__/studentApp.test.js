import request from 'supertest'
import app from '../app'

describe('Student table test suite', ()=>{
    it('Should get all students', async()=>{
        const res = await request(app).get('/')

        expect(res.status).toBe(200)
        expect(res.body.todos).toBeInstanceOf(Array)
    })

    it('Gets a single student by Registration number', async()=>{
        const res = await request(app).get('/Students/1')

        expect(res.statusCode).toBe(200)
        expect(res.body.todo).toEqual(
            expect.objectContaining({
                userId: expect.any(Number),
                title: expect.any(String),
                completed: expect.any(Boolean),
                id: expect.any(Number)
            })
        ) 
    })

    it('Throws an error if no student is found', async()=>{
        const res = await request(app).get('/Students/qwerty')

        expect(res.statusCode).toBe(404)
        expect(res.body.error).toBe('Error! Student not found')
    })  
})