class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by(name: params[:session][:name])
        if @user && @user.authenticate(params[:session][:password])
            session[:id] = @user.id
            render json: @user 
        else 
            render json: {
                error: "Invalid Credentials"
            }
        end
    end

    def get_current_user
        if logged_in?
            render json: current_user 
        else
            render json: {
                error: "No one logged in"
            }
        end
    end

    def destroy
        session.clear 
        render: json: {
            notice: "successfully logged out"
        }
    end
    
end

