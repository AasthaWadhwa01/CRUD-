const supertest= require('supertest');
const express= require('express');
const App= require('../app');
const expect= require ('chai').expect;
const should= require('chai').should();
const sinon= require('sinon');
const model= require('../Book.model.js');
const modelStub= sinon.stub(model, 'find');
const request=require('supertest');


describe('testing get method', function(){
	it('respond with json format', function(done){
		modelStub.yields(null, [{title: "The Lost Book", author: "Dan Brown", category: "suspense"}])
			request(App)
			.get('/bookstore')
			.expect('Content-Type',/json/)
			.end(function(err, res){
				if(err){return done(err);}
				expect(res.body[0].title).to.be.equal("The Lost Book");
				expect(res.body[0].author).to.be.equal("Dan Brown");
				expect(res.body[0].category).to.be.equal("suspense");
				done();
			})
		})
})

		describe('testing post mehod', function(){
				it('should respond with 200 and in json format', function(done){
					request(App)
					.post('/bookpost')
					.send({title: "The Found Book", author: "charlie jane", category: "thriller"})
					.expect(200)
					.expect('Content-Type',/json/)
					.end(function(err, res){
					if(err) return done(err);
					res.body.should.have.property('title',"The Found Book")
					res.body.should.have.property('author',"charlie jane")
					res.body.should.have.property('category',"thriller")
					done();
			})
	})
})

		describe('removing by put method', function(){
			it('should remove the properties', function(done){
				request(App)
				.get('/bookstore')
				.end(function(err, res){
					request(App)
					.delete
				})
			})
		})

describe('testing post mehod', function(){
				it('should respond with 200 and in json format', function(done){
					request(App)
					.delete('/:id')
					.expect(200)
					.expect('Content-Type',/json/)
					.end(function(err, res){
					if(err) return done(err);
					res.body.should.have.property('title',"The Found Book")
					res.body.should.have.property('author',"charlie jane")
					res.body.should.have.property('category',"thriller")
					done();
			})
	})
})
