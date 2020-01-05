import * as chai from 'chai';
const chaiHttp = require('chai-http');
import * as sinon from 'sinon';
import { expect } from 'chai';
import { test } from './auth';
chai.use(chaiHttp);

describe('Auth Endpoints', () => {
	describe('test', function() {
		it('should return test', () => {
			expect(test()).to.eql('testing');
		});
	});
});
