import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import LoginForm from "./LoginForm.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: '/', component: LoginForm}]
})

describe('LoginForm.vue', () => {
    test('ID는 이메일 형식', async () => {
        setActivePinia(createPinia());
        await router.push("/");
        await router.isReady()

        const wrapper = mount(LoginForm, {
            global: {
                plugins: [router, createPinia()]
            }
        });
        wrapper.vm.username = 'test'
        await wrapper.vm.$nextTick(); // DOM update

        const idInput = wrapper.find("#username")
        expect(idInput.exists()).toBe(true);
        
        console.log('인풋 박스의 값', idInput.element.value);
        console.log("isUsernameValid", wrapper.vm.isUsernameValid);

        await wrapper.vm.$nextTick();
        const wraningText = wrapper.find('.warning');
        console.log(wraningText.html());
        expect(wraningText.exists()).toBe(true);
    });

    test('ID와 PW가 입력되지 않으면 로그인 버튼이 비활성화 된다.', async () => {
        setActivePinia(createPinia());
        await router.push("/");
        await router.isReady()

        const wrapper = mount(LoginForm, {
            global: {
                plugins: [router, createPinia()]
            }
        });
        wrapper.vm.username = '';
        wrapper.vm.password = '';

        const button = wrapper.find('.btn');
        // button.element.disabled
        expect(button.element.disabled).toBe(true);
    })
})