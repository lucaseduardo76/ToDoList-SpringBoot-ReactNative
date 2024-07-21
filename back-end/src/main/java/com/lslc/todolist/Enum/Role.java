package com.lslc.todolist.Enum;

public enum Role {

    DONE("DONE"),
    PROCESS("PROCESS");

    private final String value;

    Role(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public static Role fromValue(String value) {
        for (Role role : Role.values()) {
            if (role.getValue().equals(value)) {
                return role;
            }
        }
        throw new IllegalArgumentException("Valor desconhecido: >" + value);
    }
}
